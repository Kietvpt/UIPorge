using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UIForge.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class ValidationController : ControllerBase
    {
        public class ContainerCheckRequest
        {
            public string ContainerNo { get; set; } = string.Empty;
        }

        public class UniqueCheckRequest
        {
            public string EntityName { get; set; } = string.Empty;
            public string FieldName { get; set; } = string.Empty;
            public string Value { get; set; } = string.Empty;
            public string? ExcludeId { get; set; }
        }

        /// <summary>
        /// Kiểm tra tính hợp lệ của Số Container quốc tế theo tiêu chuẩn ISO 6346
        /// </summary>
        [HttpPost("check-container")]
        public IActionResult CheckContainer([FromBody] ContainerCheckRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.ContainerNo))
            {
                return BadRequest(new { isValid = false, message = "Số Container không được để trống" });
            }

            var clean = request.ContainerNo.Trim().ToUpperInvariant();
            if (clean.Length != 11)
            {
                return Ok(new
                {
                    isValid = false,
                    containerNo = clean,
                    message = $"Số container [{clean}] phải có đúng 11 ký tự (4 chữ cái + 7 chữ số)"
                });
            }

            // ISO 6346 calculation
            var charValues = new Dictionary<char, int>
            {
                {'A', 10}, {'B', 12}, {'C', 13}, {'D', 14}, {'E', 15}, {'F', 16}, {'G', 17}, {'H', 18}, {'I', 19}, {'J', 20},
                {'K', 21}, {'L', 23}, {'M', 24}, {'N', 25}, {'O', 26}, {'P', 27}, {'Q', 28}, {'R', 29}, {'S', 30}, {'T', 31},
                {'U', 32}, {'V', 34}, {'W', 35}, {'X', 36}, {'Y', 37}, {'Z', 38}
            };

            int sum = 0;
            for (int i = 0; i < 10; i++)
            {
                char c = clean[i];
                int val;
                if (char.IsDigit(c))
                {
                    val = c - '0';
                }
                else if (charValues.TryGetValue(c, out int charVal))
                {
                    val = charVal;
                }
                else
                {
                    return Ok(new { isValid = false, containerNo = clean, message = $"Ký tự [{c}] không hợp lệ trong số container" });
                }

                int weight = 1 << i; // 2^i
                sum += val * weight;
            }

            int calculated = sum % 11;
            if (calculated == 10) calculated = 0;

            int actual = clean[10] - '0';
            bool isValid = calculated == actual;

            return Ok(new
            {
                isValid,
                containerNo = clean,
                calculatedCheckDigit = calculated,
                actualCheckDigit = actual,
                message = isValid
                    ? $"Số container [{clean}] hợp lệ chuẩn quốc tế ISO 6346."
                    : $"Số container [{clean}] sai Check Digit: Tính toán là [{calculated}] nhưng nhập là [{actual}]."
            });
        }

        /// <summary>
        /// Kiểm tra tính duy nhất (Unique) của dữ liệu (JobNo, ContainerNo, SealNo...)
        /// </summary>
        [HttpPost("check-unique")]
        public IActionResult CheckUnique([FromBody] UniqueCheckRequest request)
        {
            var clean = request.Value.Trim().ToUpperInvariant();
            
            // Danh sách các mã giả lập đã tồn tại trong CSDL để test
            var existingJobs = new HashSet<string> { "FCLI-26010001", "FCLI-26010002" };
            var existingContainers = new HashSet<string> { "MSKU9988776", "CMAU1122334" };

            bool isDuplicate = false;
            if (request.FieldName.Equals("JobNo", StringComparison.OrdinalIgnoreCase) && existingJobs.Contains(clean))
            {
                isDuplicate = true;
            }
            else if (request.FieldName.Equals("ContainerNo", StringComparison.OrdinalIgnoreCase) && existingContainers.Contains(clean))
            {
                isDuplicate = true;
            }

            return Ok(new
            {
                isUnique = !isDuplicate,
                entityName = request.EntityName,
                fieldName = request.FieldName,
                value = clean,
                message = isDuplicate
                    ? $"Giá trị [{clean}] đã tồn tại trong hệ thống. Vui lòng nhập mã khác."
                    : $"Giá trị [{clean}] hợp lệ và chưa tồn tại trong hệ thống."
            });
        }
    }
}


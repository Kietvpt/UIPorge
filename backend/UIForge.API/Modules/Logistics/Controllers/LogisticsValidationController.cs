using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UIForge.API.Modules.Logistics.Controllers
{
    /// <summary>
    /// 🚢 Bộ kiểm tra nghiệp vụ Logistics (Sample Test Bench Validation)
    /// Đặt đúng trong Modules/Logistics để đảm bảo Core hoàn toàn độc lập và không dính nghiệp vụ.
    /// </summary>
    [ApiController]
    [Route("api/logistics/validation")]
    [AllowAnonymous]
    public class LogisticsValidationController : ControllerBase
    {
        public class ContainerCheckRequest
        {
            public string ContainerNo { get; set; } = string.Empty;
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
    }
}


---
id: "enterprise_nda_compliance_audit"
name: "Enterprise Non-Disclosure Agreement (NDA) Compliance Audit"
category: "Legal Architecture & Compliance"
role_archetype: "Legal"
skill_level: 2
exp: 510
discovered_at: "2026-10-14T02:05:00.000Z"
source: "I2FLabs Corporate Governance Experience"
adaptation_count: 5
enabled: true
tool: "distilled_skill_execution"
---

# Enterprise Non-Disclosure Agreement (NDA) Compliance Audit

## 1. BẢN THIẾT KẾ NGUYÊN LÝ (FIRST PRINCIPLES & INVARIANTS)
### 1.1. Bài toán Cốt lõi
Doanh nghiệp khi hợp tác, trao đổi công nghệ hoặc tiếp nhận đầu tư thường phải ký các thỏa thuận bảo mật (NDA). Nhiều hợp đồng cài cắm các điều khoản bẫy (non-compete trá hình, quyền sở hữu phái sinh vô lý, thời hạn bảo mật vô thời hạn bất đối xứng).
### 1.2. Nguyên lý Nền tảng
- Thỏa thuận bảo mật là hợp đồng tương hỗ bảo vệ tài sản vô hình (IP / Trade Secrets).
- Nguyên lý cân bằng quyền lợi: Bên tiết lộ (Disclosing Party) và Bên tiếp nhận (Receiving Party) phải có quyền và nghĩa vụ tương xứng; phạm vi "Thông tin bảo mật" phải được định nghĩa khả thi và rõ ràng.
### 1.3. Ràng buộc Bất biến (Non-Negotiable Invariants)
- **Zero Confidential Leakage**: Tuyệt đối không sao chép nguyên văn các điều khoản hoặc thông tin mật từ các hợp đồng cũ của Master vào tài liệu mới.
- **Jurisdiction Neutrality until Specified**: Không áp đặt luật một quốc gia tùy tiện; phải đối chiếu theo thẩm quyền tài phán (Jurisdiction) được chỉ định trong bối cảnh thực tế.
- **Strict IP Segregation**: Mọi điều khoản cố tình chuyển giao quyền sở hữu trí tuệ ngầm trong NDA đều bị xếp vào mức độ Rủi ro Nghiêm trọng (Critical Risk) và phải bị loại bỏ.

---

## 2. QUY TRÌNH THAO TÁC CHUẨN (SOP)
1. **Bước 1 - Thẩm định Thẩm quyền (Jurisdiction Introspection)**: Xác định luật điều chỉnh của hợp đồng (Luật Việt Nam 2015, Luật Singapore, hay Delaware - Hoa Kỳ).
2. **Bước 2 - Quét 6 Ranh giới Trọng yếu (6-Pillar Boundary Scan)**:
   - *Phạm vi thông tin mật (Scope)*: Có quá rộng hoặc bao gồm cả tri thức phổ thông không?
   - *Ngoại lệ (Exclusions)*: Đã đủ 4 ngoại lệ chuẩn quốc tế chưa (đã công khai, bên nhận tự nghiên cứu độc lập, có được từ bên thứ 3 hợp pháp, yêu cầu của tòa án)?
   - *Thời hạn bảo mật (Term & Survival)*: Thường từ 2 - 5 năm; cảnh giác với điều khoản vô thời hạn không áp dụng cho bí mật thương mại cốt lõi.
   - *Bẫy không cạnh tranh (Non-Compete / Non-Solicit Sneak)*: Có bị gài điều khoản cấm nhân sự làm việc không?
   - *Quyền sở hữu phát sinh (Residuals & Derivative Works)*: Đảm bảo bên nhận không bị mất quyền sở hữu đối với các công cụ/nền tảng của mình.
   - *Biện pháp bồi thường (Remedies & Liabilities)*: Giới hạn trách nhiệm tài chính hợp lý, loại bỏ phạt vi phạm không có trần.
3. **Bước 3 - Tái tạo Bảng Ma trận Khuyến nghị (Remediation Matrix Synthesis)**: Lập bảng đối soát chi tiết: Điều khoản hiện tại -> Mức độ rủi ro -> Điều khoản đề xuất viết lại.
4. **Bước 4 - Biên soạn Tóm tắt Điều hành (Executive Summary)**: Đưa ra kết luận rõ ràng: Khuyên ký ngay, cần thương lượng lại, hay từ chối thẳng thừng.

---

## 5. CÔNG THỨC TÁI TẠO ĐỘNG (GENERATIVE RECONSTRUCTION RECIPE)

### 3.1. Hợp đồng Tham số Động
- `JURISDICTION`: Thẩm quyền pháp lý (vd: "Việt Nam", "Singapore", "Delaware USA").
- `PARTY_ROLE`: Vai trò của thân chủ ("Bên Tiết Lộ", "Bên Tiếp Nhận", hoặc "Song phương - Mutual").
- `INDUSTRY_SECTOR`: Ngành nghề (vd: "DeepTech AI / SaaS", "Sản xuất phần cứng", "Đầu tư mạo hiểm").

### 3.2. Quy tắc Thích ứng theo Bối cảnh
* **Nếu pháp lý là Việt Nam**:
  - Đối chiếu Bộ luật Dân sự 2015 (Điều 388 về Hợp đồng), Luật Sở hữu Trí tuệ 2005 (sửa đổi 2022 về Bí mật kinh doanh).
  - Cảnh báo về Điều 8 Luật Cạnh tranh nếu có điều khoản hạn chế hoạt động nghề nghiệp.
* **Nếu pháp lý là Quốc tế / Hoa Kỳ**:
  - Đối chiếu chuẩn mực Defend Trade Secrets Act (DTSA) 2016, bao gồm điều khoản miễn trừ cho người tố giác (Whistleblower Immunity Notice).
  - Tự động sinh điều khoản trọng tài quốc tế (SIAC hoặc ICC) phù hợp.

---

## 4. TIÊU CHÍ ĐÁNH GIÁ & KIỂM ĐỊNH (VERIFICATION CRITERIA)
- [ ] Không rò rỉ bất kỳ tên riêng, số liệu tài chính hoặc bí mật của khách hàng cũ.
- [ ] 100% các rủi ro phát hiện đều có phương án điều khoản thay thế (Redline Clause) cụ thể.
- [ ] Ngôn từ pháp lý chặt chẽ, khách quan, không chứa nhận định cảm tính.
- [ ] Phân định rõ ranh giới giữa tư vấn tuân thủ nghiệp vụ và ý kiến luật sư tranh tụng.

---

## 5. MA TRẬN TIẾN HÓA (EVOLUTION MATRIX)
- *2026-10-14*: Vidus chuẩn hóa kỹ năng rà soát NDA doanh nghiệp, tối ưu hóa khả năng chuyển giao đa hệ thống pháp luật theo chuẩn Universal Generative Skill Archetype.

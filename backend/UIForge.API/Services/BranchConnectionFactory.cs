namespace UIForge.API.Services
{
    /// <summary>
    /// Xây connection string theo "branch" - hậu tố của tên database.
    /// VD: branch "BetaV1" -> Database "UIPorge_BetaV1", "BetaV2" -> "UIPorge_BetaV2".
    /// </summary>
    public static class BranchConnectionFactory
    {
        /// <summary>Chuẩn hóa & validate tên branch (chống injection vào connection string).</summary>
        public static string Normalize(string? branch, IConfiguration config)
        {
            var value = string.IsNullOrWhiteSpace(branch)
                ? config["Branching:DefaultBranch"] ?? "BetaV1"
                : branch.Trim();

            if (value.Length > 50 || !value.All(c => char.IsLetterOrDigit(c) || c == '_' || c == '-'))
                throw new ArgumentException($"Branch '{value}' không hợp lệ. Chỉ cho phép chữ, số, '_' và '-'.");

            return value;
        }

        /// <summary>Tạo connection string đầy đủ cho branch (áp dụng template trong appsettings).</summary>
        public static string Build(IConfiguration config, string? branch)
        {
            var normalized = Normalize(branch, config);
            var template = config.GetConnectionString("BranchTemplate")
                ?? "Server=ADMIN-PC\\SQLEXPRESS;Database=UIPorge_{branch};Integrated Security=True;TrustServerCertificate=True;MultipleActiveResultSets=true";

            return template.Replace("{branch}", normalized);
        }
    }
}

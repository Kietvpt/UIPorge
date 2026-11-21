using System;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace UIForge.Core.Services
{
    /// <summary>
    /// Xây connection string theo "branch" - hậu tố của tên database.
    /// Hỗ trợ Multi-DB Provider: SqlServer, PostgreSQL, SQLite.
    /// </summary>
    public static class BranchConnectionFactory
    {
        /// <summary>
        /// Đọc nhà cung cấp CSDL từ cấu hình ("SqlServer" | "PostgreSQL" | "SQLite", mặc định "SqlServer").
        /// </summary>
        public static string GetDatabaseProvider(IConfiguration config)
        {
            var provider = config["Database:Provider"] ?? config["DatabaseProvider"];
            if (string.IsNullOrWhiteSpace(provider))
                return "SqlServer";

            if (provider.Equals("PostgreSQL", StringComparison.OrdinalIgnoreCase) ||
                provider.Equals("Postgres", StringComparison.OrdinalIgnoreCase) ||
                provider.Equals("Npgsql", StringComparison.OrdinalIgnoreCase))
            {
                return "PostgreSQL";
            }

            if (provider.Equals("SQLite", StringComparison.OrdinalIgnoreCase) ||
                provider.Equals("Sqlite3", StringComparison.OrdinalIgnoreCase))
            {
                return "SQLite";
            }

            return "SqlServer";
        }

        public static string Normalize(string? branch, IConfiguration config)
        {
            var value = string.IsNullOrWhiteSpace(branch)
                ? config["Branching:DefaultBranch"] ?? "BetaV1"
                : branch.Trim();

            if (value.Length > 50 || !value.All(c => char.IsLetterOrDigit(c) || c == '_' || c == '-'))
                throw new ArgumentException($"Branch '{value}' không hợp lệ. Chỉ cho phép chữ, số, '_' và '-'.");

            return value;
        }

        public static string Build(IConfiguration config, string? branch)
        {
            var normalized = Normalize(branch, config);
            var provider = GetDatabaseProvider(config);
            var template = config.GetConnectionString("BranchTemplate");

            if (string.IsNullOrWhiteSpace(template))
            {
                template = provider switch
                {
                    "PostgreSQL" => "Host=localhost;Port=5432;Database=uiforge_{branch};Username=postgres;Password=postgres",
                    "SQLite" => "Data Source=uiforge_{branch}.db",
                    _ => "Server=ADMIN-PC\\SQLEXPRESS;Database=UIPorge_{branch};Integrated Security=True;TrustServerCertificate=True;MultipleActiveResultSets=true"
                };
            }

            return template.Replace("{branch}", normalized);
        }
    }
}

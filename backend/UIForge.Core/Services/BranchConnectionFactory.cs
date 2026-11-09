using System;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace UIForge.Core.Services
{
    /// <summary>
    /// Xây connection string theo "branch" - hậu tố của tên database.
    /// VD: branch "BetaV1" -> Database "UIPorge_BetaV1".
    /// </summary>
    public static class BranchConnectionFactory
    {
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
            var template = config.GetConnectionString("BranchTemplate")
                ?? "Server=ADMIN-PC\\SQLEXPRESS;Database=UIPorge_{branch};Integrated Security=True;TrustServerCertificate=True;MultipleActiveResultSets=true";

            return template.Replace("{branch}", normalized);
        }
    }
}


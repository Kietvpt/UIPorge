# UIForge.Core

Core Framework & Generic Dynamic Metadata Engine for UIForge Low-Code Platform.

## Features
- **Multi-DB Provider Support**: Out-of-the-box support for Microsoft SQL Server, PostgreSQL, and SQLite.
- **Dynamic Metadata & Schema Engine**: Generic controllers for dynamic entity management and schema extraction.
- **Hierarchical Feature Tree**: Self-referencing Page hierarchy with drag-and-drop ordering, grouping, and feature properties.
- **Multi-tier Permission System**: RBAC + ABAC policy engine with FeaturePolicies (13 standard columns) and ComponentPolicies (5 core permissions).
- **Multi-branch Tenant Architecture**: Multi-tenant database branch routing via JWT claims and request headers (`X-Branch`).

## Installation

```bash
dotnet add package UIForge.Core
```

## Quick Start

In your ASP.NET Core `Program.cs`:

```csharp
using UIForge.Core.Extensions;

// Register UIForge Core services
builder.Services.AddUIForgeCore<AppDbContext>(builder.Configuration);

// Add UIForge Generic Controllers
builder.Services.AddControllers().AddUIForgeControllers();
```

## Configuration

In `appsettings.json`:

```json
{
  "Database": {
    "Provider": "SqlServer" // "SqlServer" | "PostgreSQL" | "SQLite"
  },
  "ConnectionStrings": {
    "BranchTemplate": "Server=localhost;Database=UIForge_{branch};Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

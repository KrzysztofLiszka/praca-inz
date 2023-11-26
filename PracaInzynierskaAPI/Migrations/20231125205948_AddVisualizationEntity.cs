using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PracaInzynierskaAPI.Migrations
{
    public partial class AddVisualizationEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Visualizations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    WorkplaceId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Visualizations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Visualizations_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Visualizations_Workplaces_WorkplaceId",
                        column: x => x.WorkplaceId,
                        principalTable: "Workplaces",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Image",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    VisualizationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Image", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Image_Visualizations_VisualizationId",
                        column: x => x.VisualizationId,
                        principalTable: "Visualizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Image_VisualizationId",
                table: "Image",
                column: "VisualizationId");

            migrationBuilder.CreateIndex(
                name: "IX_Visualizations_UserId",
                table: "Visualizations",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Visualizations_WorkplaceId",
                table: "Visualizations",
                column: "WorkplaceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Image");

            migrationBuilder.DropTable(
                name: "Visualizations");
        }
    }
}

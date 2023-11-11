using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PracaInzynierskaAPI.Migrations
{
    public partial class FixBaseEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "WorkplaceId",
                table: "Assignments",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Assignments_WorkplaceId",
                table: "Assignments",
                column: "WorkplaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Assignments_Workplaces_WorkplaceId",
                table: "Assignments",
                column: "WorkplaceId",
                principalTable: "Workplaces",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Assignments_Workplaces_WorkplaceId",
                table: "Assignments");

            migrationBuilder.DropIndex(
                name: "IX_Assignments_WorkplaceId",
                table: "Assignments");

            migrationBuilder.DropColumn(
                name: "WorkplaceId",
                table: "Assignments");
        }
    }
}

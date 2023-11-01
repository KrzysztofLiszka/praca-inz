using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PracaInzynierskaAPI.Migrations
{
    public partial class AddForeignKeyInUsersToWorkplaces : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Login",
                table: "Users",
                newName: "Email");

            migrationBuilder.AddColumn<Guid>(
                name: "WorkplaceId",
                table: "Users",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_WorkplaceId",
                table: "Users",
                column: "WorkplaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Workplaces_WorkplaceId",
                table: "Users",
                column: "WorkplaceId",
                principalTable: "Workplaces",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Workplaces_WorkplaceId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_WorkplaceId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "WorkplaceId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "Login");
        }
    }
}

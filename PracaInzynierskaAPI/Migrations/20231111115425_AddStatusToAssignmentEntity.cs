using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PracaInzynierskaAPI.Migrations
{
    public partial class AddStatusToAssignmentEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Assignments",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Assignments");
        }
    }
}

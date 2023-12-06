﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PracaInzynierskaAPI.Data;

#nullable disable

namespace PracaInzynierskaAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.21")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Assignment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("DescriptionHtmlContent")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("WorkplaceId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.HasIndex("WorkplaceId");

                    b.ToTable("Assignments");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Documentation", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ChapterName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DescriptionHtmlContent")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("WorkplaceId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.HasIndex("WorkplaceId");

                    b.ToTable("Documentations");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Image", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<byte[]>("Data")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<Guid>("VisualizationId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("VisualizationId");

                    b.ToTable("Image");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Schedule", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Hour")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("WorkplaceId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.HasIndex("WorkplaceId");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("ProfilePicture")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("RoleName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("WorkplaceId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("WorkplaceId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Visualization", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("WorkplaceId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.HasIndex("WorkplaceId");

                    b.ToTable("Visualizations");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Workplace", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Workplaces");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Assignment", b =>
                {
                    b.HasOne("PracaInzynierskaAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PracaInzynierskaAPI.Models.Workplace", "Workplace")
                        .WithMany()
                        .HasForeignKey("WorkplaceId");

                    b.Navigation("User");

                    b.Navigation("Workplace");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Documentation", b =>
                {
                    b.HasOne("PracaInzynierskaAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PracaInzynierskaAPI.Models.Workplace", "Workplace")
                        .WithMany()
                        .HasForeignKey("WorkplaceId");

                    b.Navigation("User");

                    b.Navigation("Workplace");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Image", b =>
                {
                    b.HasOne("PracaInzynierskaAPI.Models.Visualization", null)
                        .WithMany("Images")
                        .HasForeignKey("VisualizationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Schedule", b =>
                {
                    b.HasOne("PracaInzynierskaAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PracaInzynierskaAPI.Models.Workplace", "Workplace")
                        .WithMany()
                        .HasForeignKey("WorkplaceId");

                    b.Navigation("User");

                    b.Navigation("Workplace");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.User", b =>
                {
                    b.HasOne("PracaInzynierskaAPI.Models.Workplace", "Workplace")
                        .WithMany()
                        .HasForeignKey("WorkplaceId");

                    b.Navigation("Workplace");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Visualization", b =>
                {
                    b.HasOne("PracaInzynierskaAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("PracaInzynierskaAPI.Models.Workplace", "Workplace")
                        .WithMany()
                        .HasForeignKey("WorkplaceId");

                    b.Navigation("User");

                    b.Navigation("Workplace");
                });

            modelBuilder.Entity("PracaInzynierskaAPI.Models.Visualization", b =>
                {
                    b.Navigation("Images");
                });
#pragma warning restore 612, 618
        }
    }
}

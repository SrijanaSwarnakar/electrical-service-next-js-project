"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { ArrowRight, Maximize2 } from "lucide-react";

export default function ProjectGallery({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const displayProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const categories = Array.from(new Set(projects.map((project) => project.category)));

  return (
    <section
      id="projects"
      className="section-py scroll-mt-24 bg-white"
    >
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label">Our work</span>
            <h2 className="mb-4 text-3xl font-extrabold text-[#101827] md:text-4xl lg:text-5xl">
              Recent electrical projects
            </h2>
            <div className="section-divider" />
            <p className="text-lg leading-8 text-[#475569]">
              A selection of recent residential and commercial work across Melbourne, from lighting and maintenance to electrical control systems.
            </p>
          </div>

          {!showAll && (
            <Link
              href="/projects"
              className="btn-outline hidden shrink-0 md:flex"
            >
              View all projects
              <ArrowRight size={18} />
            </Link>
          )}
        </div>

        <div className="mb-9 flex flex-wrap gap-2.5">
          <button
            onClick={() => setActiveCategory("All")}
            className={`rounded-full border px-4 py-2 text-sm font-extrabold transition-all duration-200 ${
              activeCategory === "All"
                ? "border-[#0B1220] bg-[#0B1220] text-white shadow-[0_6px_16px_rgba(11,18,32,0.16)]"
                : "border-[#E2E8F0] bg-white text-[#475569] hover:border-[#72C452]/60 hover:bg-[#F6FAF3] hover:text-[#101827]"
            }`}
          >
            All work
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-extrabold transition-all duration-200 ${
                activeCategory === category
                  ? "border-[#0B1220] bg-[#0B1220] text-white shadow-[0_6px_16px_rgba(11,18,32,0.16)]"
                  : "border-[#E2E8F0] bg-white text-[#475569] hover:border-[#72C452]/60 hover:bg-[#F6FAF3] hover:text-[#101827]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects#${project.id}`}
              className="group relative block aspect-square overflow-hidden rounded-[1.25rem] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_5px_18px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(15,23,42,0.18)]"
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050A12]/95 via-[#07111F]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:p-6">
                <span className="mb-1.5 block text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#9BEA7C] drop-shadow-[0_2px_7px_rgba(0,0,0,0.7)]">
                  {project.category}
                </span>
                <h3 className="mb-1.5 text-xl font-extrabold leading-tight text-white drop-shadow-[0_3px_9px_rgba(0,0,0,0.75)]">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="line-clamp-2 text-sm leading-6 text-white/90 drop-shadow-[0_2px_7px_rgba(0,0,0,0.75)]">
                    {project.description}
                  </p>
                )}
              </div>

              <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-[-4px] items-center justify-center rounded-full border border-white/25 bg-[#0B1220]/65 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Maximize2 size={17} />
              </span>
            </Link>
          ))}
        </div>

        {displayProjects.length === 0 && (
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F6FAF3] py-20 text-center">
            <p className="text-lg text-[#64748B]">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 font-extrabold text-[#4D9634] hover:underline"
            >
              View all projects
            </button>
          </div>
        )}

        {!showAll && (
          <div className="mt-9 flex justify-center md:hidden">
            <Link
              href="/projects"
              className="btn-outline w-full justify-center"
            >
              View all projects
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

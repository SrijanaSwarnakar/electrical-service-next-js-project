"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { ArrowRight, Maximize2 } from "lucide-react";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // We only want to show up to 6 projects on the home page gallery
  const displayProjects = filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="section-py bg-white">
      <div className="container-site">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-label">Our Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#111827]">
              Recent Electrical Projects
            </h2>
            <div className="section-divider" />
            <p className="text-[#4B5563] text-lg">
              Take a look at some of our recent work across Melbourne. From residential lighting to commercial switchboards, we take pride in every job.
            </p>
          </div>
          <Link href="/projects" className="btn-outline hidden md:flex shrink-0">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === "All"
                ? "bg-[#111827] text-white shadow-sm"
                : "bg-[#F5F9F2] text-[#4B5563] hover:bg-[#E5E7EB]"
            }`}
          >
            All Work
          </button>
          
          {/* Only show categories that actually have projects in our data */}
          {Array.from(new Set(projects.map(p => p.category))).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#111827] text-white shadow-sm"
                  : "bg-[#F5F9F2] text-[#4B5563] hover:bg-[#E5E7EB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#F5F9F2] border border-[#E5E7EB] cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition-all duration-500"
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/95 via-[#111827]/75 via-55% to-[#111827]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#8BE06A] font-bold text-xs tracking-wider uppercase mb-2 block drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]">
                    {project.category}
                  </span>
                  <h3 className="text-white font-extrabold text-xl mb-2 drop-shadow-[0_2px_7px_rgba(0,0,0,0.75)]">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-white/95 text-sm line-clamp-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                      {project.description}
                    </p>
                  )}
                </div>
                
                {/* Expand icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#111827]/65 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 border border-white/20">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state (if filter returns no results) */}
        {displayProjects.length === 0 && (
          <div className="text-center py-20 bg-[#F5F9F2] rounded-2xl border border-[#E5E7EB]">
            <p className="text-[#6B7280] text-lg">No projects found in this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-[#72C452] font-bold hover:underline"
            >
              View all projects
            </button>
          </div>
        )}

        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link href="/projects" className="btn-outline w-full justify-center">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

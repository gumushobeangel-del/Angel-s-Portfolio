import React, { useState } from "react";
import { Search, Sparkles, Filter, CheckCircle, Code2 } from "lucide-react";
import { skillsData } from "../data/portfolioData";

export function SkillsSection() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Languages", "Frontend", "Backend", "AI & ML", "Data & DevOps", "IoT & Hardware"];

  // Filter skills by category and search query
  const filteredSkills = skillsData
    .filter((grp) => selectedCat === "All" || grp.category === selectedCat)
    .map((grp) => {
      if (!searchQuery.trim()) return grp;
      const filteredItems = grp.items.filter(
        (it) =>
          it.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          it.note.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...grp, items: filteredItems };
    })
    .filter((grp) => grp.items.length > 0);

  return (
    <section className="skills-section" id="skills">
      <div className="section-wrap">
        <div className="skills-header reveal">
          <div>
            <span className="section-label">02 / Technical Stack</span>
            <h2 className="section-title">Skills &amp; Engineering Toolkit</h2>
          </div>
          <p className="skills-header-right">
            Technologies and frameworks I utilize to architect, build, and deploy
            dependable full-stack software and AI solutions.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="skills-controls-bar reveal">
          <div className="skills-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skill-cat-pill ${selectedCat === cat ? "skill-cat-active" : ""}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="skill-search-wrap">
            <Search size={14} className="search-icon" />
            <input
              type="text"
              className="skill-search-input"
              placeholder="Filter by tech (e.g. React, FastAPI, LLM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="search-clear-chip"
                onClick={() => setSearchQuery("")}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid reveal-stagger">
          {filteredSkills.length === 0 ? (
            <div className="skills-no-results">
              <Code2 size={32} className="text-dim" />
              <p>No technologies found matching "{searchQuery}". Try another keyword.</p>
            </div>
          ) : (
            filteredSkills.map((group, idx) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-head">
                    <span
                      className="skill-icon"
                      style={{
                        borderColor: `${group.accent}40`,
                        backgroundColor: `${group.accent}12`,
                        color: group.accent,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <span className="skill-num">0{idx + 1}</span>
                  </div>

                  <h3 className="skill-group-title">{group.title}</h3>

                  <div className="skill-items-list">
                    {group.items.map((item) => (
                      <div className="skill-item-row" key={item.name}>
                        <div className="skill-item-main">
                          <span className="skill-name">{item.name}</span>
                          <span className="skill-note">{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

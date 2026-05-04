"use client";

import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import Data from "../../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHashtag } from "@fortawesome/free-solid-svg-icons";


type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string;
  date: string; // ISO (YYYY-MM-DD)
  gallery: string[]; // paths relative to /public
};

function isVideo(path: string) {
  return /\.(mp4|webm|ogg)$/i.test(path);
}

function sortByMostRecent(a: Project, b: Project) {
  const ta = Date.parse(a.date);
  const tb = Date.parse(b.date);

  if (!Number.isNaN(tb) && !Number.isNaN(ta)) return tb - ta;
  if (!Number.isNaN(tb)) return 1;
  if (!Number.isNaN(ta)) return -1;
  return 0;
}

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const projects = useMemo<Project[]>(() => {
    const raw = (Data as any)?.projects ?? [];
    return [...raw].sort(sortByMostRecent);
  }, []);

  const recentProjects = useMemo(() => projects.slice(0, 3), [projects]);

  const selectedProject = useMemo(() => {
    if (!projects.length) return null;
    const fromSlug = selectedSlug
      ? projects.find((p) => p.slug === selectedSlug) ?? null
      : null;
    return fromSlug ?? projects[0] ?? null;
  }, [projects, selectedSlug]);

  function openModal() {
    if (projects.length && !selectedSlug) setSelectedSlug(projects[0].slug);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.projects} id="projects">
      <h5 className={"mb-3"}></h5>

      <ul className={styles.list}>
        {recentProjects.map((p) => {
          return (
            <li key={p.slug} className={styles.item}>
              <button
                type="button"
                className={styles.projectCard}
                onClick={() => {
                  setSelectedSlug(p.slug);
                  setIsOpen(true);
                }}
              >
                <div className={styles.cardTitle}>{p.name}</div>
                <div className={styles.cardDesc}>{p.description.slice(0, p.description.indexOf("\n"))}</div>

                <div className={styles.cardTags}>
                  {
                    p.stack.split(", ").map((item, index) => {
                      return <div className={styles.cardTag}><FontAwesomeIcon icon={faHashtag} /> {item}</div>
                    })
                  }
                </div>
              </button>
            </li>
          );
        })}

        <li className={styles.viewAllRow}>
          <button type="button" className={styles.viewAllBtn} onClick={openModal}>
            Todos os projetos <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </li>
      </ul>

      {isOpen ? (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Todos os projetos"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>Projetos</div>
              <button type="button" className={styles.closeBtn} onClick={closeModal}>
                Fechar
              </button>
            </div>

            <div className={styles.modalBody}>
              <aside className={styles.sidebar}>
                <div className={styles.sidebarTitle}>Todos</div>
                <ul className={styles.sidebarList}>
                  {projects.map((p) => {
                    const active = p.slug === selectedProject?.slug;
                    return (
                      <li key={p.slug}>
                        <button
                          type="button"
                          className={`${styles.sidebarItem} ${
                            active ? styles.sidebarItemActive : ""
                          }`}
                          onClick={() => setSelectedSlug(p.slug)}
                        >
                          {p.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </aside>

              <section className={styles.content}>
                {selectedProject ? (
                  <>
                    <div className={styles.contentTitle}>{selectedProject.name}</div>
                    <div className={styles.contentDesc}>{selectedProject.description}</div>

                    {selectedProject.gallery?.length ? (
                      <div className={styles.gallery}>
                        {selectedProject.gallery.map((src) => {
                          const key = `${selectedProject.slug}:${src}`;
                          const safeSrc = src.startsWith("/") ? src : `/${src}`;
                          return (
                            <div key={key} className={styles.media}>
                              {isVideo(safeSrc) ? (
                                <video
                                  className={styles.video}
                                  controls
                                  preload="metadata"
                                >
                                  <source src={safeSrc} />
                                </video>
                              ) : (
                                <img
                                  className={styles.image}
                                  src={safeSrc}
                                  alt={`${selectedProject.name} - mídia`}
                                  loading="lazy"
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className={styles.emptyState}>
                        Sem mídias na galeria desse projeto.
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.emptyState}>
                    Nenhum projeto cadastrado em <code>src/app/data.json</code>.
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Projects;

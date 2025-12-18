import { useMemo, useState } from "react";
import type { FilterType, Project } from "@/types/project";
import { getFilteredProjects } from "@/utils/Project";

export const useProjectFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("ALL");

  const filteredProjects: Project[] = useMemo(() => {
    return getFilteredProjects(selectedFilter);
  }, [selectedFilter]);

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  return {
    selectedFilter,
    filteredProjects,
    handleFilterChange,
  };
};

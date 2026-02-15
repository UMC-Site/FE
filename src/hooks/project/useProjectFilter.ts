import { useMemo, useState } from "react";
import type { FilterType, Project } from "@/types/project";
import { GENERATION_TYPES, getFilteredProjects } from "@/utils/project";

export const useProjectFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(
    GENERATION_TYPES[0]
  );

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

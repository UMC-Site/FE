export interface FloatingShapeData {
  id: string;
  className: string;
  gradient: string;
}

export const FLOATING_SHAPES: readonly FloatingShapeData[] = [
  {
    id: "shape-purple",
    className: "top-[10%] left-[10%] size-72 animate-float-1",
    gradient: "var(--gradient-shape-purple)",
  },
  {
    id: "shape-pink-orange",
    className: "right-[15%] bottom-1/5 size-52 animate-float-2",
    gradient: "var(--gradient-shape-pink-orange)",
  },
  {
    id: "shape-pink",
    className: "top-1/2 left-[70%] size-40 animate-float-3",
    gradient: "var(--gradient-shape-pink)",
  },
] as const;

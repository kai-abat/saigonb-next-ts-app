import ProgressBarDefault from "@/components/loaders/ProgressBarDefault";

const MenuLoader = () => {
  return (
    <div className="h-[80dvh] sm:h-[60dvh] flex flex-col p-6 items-center justify-center">
      <ProgressBarDefault />
    </div>
  );
};
export default MenuLoader;

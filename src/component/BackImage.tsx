import Breadcrumb from "@/component/Breadcrumb";

type Props = {
  title: string;
};

const BackImage = ({ title }: Props) => {
  return (
    <div className="top-image bg-center bg-cover min-h-210 mt-2">
      <div className="max-w-7xl w-full h-full justify-center items-center mx-auto">
        <Breadcrumb />
        <h1 className="text-5xl pt-12 px-4">{title}</h1>
      </div>
    </div>
  );
};

export default BackImage;

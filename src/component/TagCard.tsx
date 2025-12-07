import Link from "next/link";
import type { Tag } from "@/types/index";

const TagCard = ({ tag }: { tag: Tag }) => {
  return (
    <div className="card card-image-cover max-w-4sm mb-8">
      <Link
        href={`/tag/${tag.id}`}
        key={tag.id}
        className="badge badge-lg text-sm badge-outline-primary"
        style={{ color: tag.color, borderColor: tag.color }}
      >
        {tag.title}
      </Link>
    </div>
  );
};

export default TagCard;

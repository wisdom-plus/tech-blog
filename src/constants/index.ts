export const PER_PAGE = 9;
export const OFFSET = (page: number) => PER_PAGE * (page - 1);

export const categoryMap = {
  all: "すべて",
  web: "Web",
  design: "デザイン",
  infra: "インフラ",
  meeting: "勉強会",
  license: "ライセンス",
  life: "生活",
  other: "その他",
};

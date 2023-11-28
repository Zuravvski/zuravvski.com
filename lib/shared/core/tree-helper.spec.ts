import { Optional } from "./optional";
import { TreeHelper } from "./tree-helper";

type CommentViewModel = {
  id: string;
  parentId: Optional<string>;
  replies: Optional<CommentViewModel[]>;
};

describe("Tree helper tests", () => {
  it("should convert array to tree", () => {
    const array: CommentViewModel[] = [
      createComment("1"),
      createComment("1-1", "1"),
      createComment("1-2", "1"),
      createComment("2"),
      createComment("3"),
      createComment("3-1", "3"),
    ];

    const tree = TreeHelper.toTree(
      array,
      (x) => x.id,
      (x) => x.parentId,
      "replies",
    );

    expect(tree.length).toBe(3);

    expect(tree[0].replies).toBeDefined();
    expect(tree[1].replies).toBeNull();
    expect(tree[2].replies).toBeDefined();

    expect(tree[0].replies!.length).toBe(2);
    expect(tree[2].replies!.length).toBe(1);
  });
});

const createComment = (id: string, parentId: string | null = null) => {
  return {
    id,
    parentId,
    replies: null,
  };
};

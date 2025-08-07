using UnityEngine;

public class Define
{
	public const int GoodsNum = 3;

	public const float GoodsSpeed = 5f;

	public const float RayDistance = 15f;

	public const float GoodsDraggingOffset = -3.5f;

	public static readonly Vector3[] GoodsPos = new Vector3[3]
	{
		new Vector3(-1.5f, -1.5f, 0f),
		new Vector3(0f, -1.5f, 0f),
		new Vector3(1.5f, -1.5f, 0f)
	};

	public static readonly string GoodsTag = "Goods";

	public static readonly string ShelfTag = "Shelf";

	public static readonly string PostTag = "Pos";
}

using UnityEngine;

public class Define
{
    public const int GoodsNum = 3;
    public const float GoodsSpeed = 5f;
    public const float RayDistance = 15f;
    public readonly static Vector3[] GoodsPos = { new Vector3(-1.5f, -1.5f, 0f), new Vector3(0f, -1.5f, 0f), new Vector3(1.5f, -1.5f, 0f) };
    public readonly static string GoodsTag = "Goods";
    public readonly static string PostTag = "Pos";
}

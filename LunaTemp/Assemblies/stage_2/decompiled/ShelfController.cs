using UnityEngine;

public class ShelfController : MonoBehaviour
{
	public GoodsController[] Goods = new GoodsController[3];

	public GameObject[] GoodsObjects = new GameObject[3];

	public bool[] IsExist = new bool[3];

	private Vector2 size;

	private Rect rect;

	private void Start()
	{
		BoxCollider box = GetComponent<BoxCollider>();
		Vector3 collSize = Vector3.Scale(box.size, base.transform.lossyScale);
		size = new Vector2(collSize.x, collSize.y);
		for (int i = 0; i < 3; i++)
		{
			if (Goods[i] != null)
			{
				GoodsController go = Object.Instantiate(Goods[i], base.transform);
				go.transform.localPosition = Define.GoodsPos[i];
				IsExist[i] = true;
				go.CurrentIdx = i;
				go.CurrentLocalPosition = go.transform.localPosition;
				go.CurrentShelf = this;
			}
		}
	}

	public void OnGoodsMovingFinished()
	{
		GoodsController[] currentGoods = GetComponentsInChildren<GoodsController>();
		if (currentGoods.Length >= 3 && currentGoods[0].name == currentGoods[1].name && currentGoods[0].name == currentGoods[2].name)
		{
			GoodsController[] array = currentGoods;
			foreach (GoodsController go in array)
			{
				Object.Destroy(go.gameObject);
			}
			PrintPopupWord();
		}
	}

	public void SetSpace(int idx, bool flag)
	{
		if (flag)
		{
			IsExist[idx] = true;
		}
		else
		{
			IsExist[idx] = false;
		}
	}

	public int GetPossibleGoodsPos(RaycastHit hit)
	{
		Vector3 localPos = hit.transform.InverseTransformDirection(hit.point);
		if (localPos.x < (0f - size.x) / 6f && !IsExist[0])
		{
			return 0;
		}
		if (localPos.x >= (0f - size.x) / 6f && localPos.x <= size.x / 6f && !IsExist[1])
		{
			return 1;
		}
		if (localPos.x > size.x / 6f && !IsExist[2])
		{
			return 2;
		}
		return -1;
	}

	public void PrintPopupWord()
	{
		GameObject go = Object.Instantiate(MyGameManager.Instance.PopupWordObject, base.transform);
		go.transform.localPosition = Vector3.zero;
	}
}

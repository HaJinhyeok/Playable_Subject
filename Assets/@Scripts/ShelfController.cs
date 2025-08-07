using UnityEngine;

public class ShelfController : MonoBehaviour
{
    public GoodsController[] Goods = new GoodsController[Define.GoodsNum];
    public GameObject[] GoodsObjects = new GameObject[Define.GoodsNum];
    public bool[] IsExist = new bool[Define.GoodsNum];

    private Vector2 size;
    private Rect rect;

    private void Start()
    {
        BoxCollider box = GetComponent<BoxCollider>();
        Vector3 collSize = Vector3.Scale(box.size, transform.lossyScale);
        //Debug.Log($"Collider size: {collSize}");
        size = new Vector2(collSize.x, collSize.y);

        for (int i = 0; i < Define.GoodsNum; i++)
        {
            if (Goods[i] != null)
            {
                //GoodsObjects[i] = Instantiate(Goods[i], transform).gameObject;
                //GoodsObjects[i].transform.localPosition = Define.GoodsPos[i];
                GoodsController go = Instantiate(Goods[i], transform);
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
        if (currentGoods.Length < Define.GoodsNum)
            return;
        if (currentGoods[0].name == currentGoods[1].name && currentGoods[0].name == currentGoods[2].name)
        {
            foreach (GoodsController go in currentGoods)
            {
                Destroy(go.gameObject);
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
        if (localPos.x < -size.x / 6 && !IsExist[0])
        {
            return 0;
        }
        else if (localPos.x >= -size.x / 6 && localPos.x <= size.x / 6 && !IsExist[1])
        {
            return 1;
        }
        else if (localPos.x > size.x / 6 && !IsExist[2])
        {
            return 2;
        }
        else
        {
            return -1;
        }
    }

    public void PrintPopupWord()
    {
        GameObject go = Instantiate(MyGameManager.Instance.PopupWordObject, transform);
        go.transform.localPosition = Vector3.zero;
    }
}

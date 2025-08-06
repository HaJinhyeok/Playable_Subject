using UnityEngine;

public class ShelfController : MonoBehaviour
{
    public GoodsController[] _goods = new GoodsController[Define.GoodsNum];
    public PosController[] _posList = new PosController[Define.GoodsNum];

    private void Start()
    {
        for (int i = 0; i < Define.GoodsNum; i++)
        {
            _goods[i].gameObject.SetActive(true);
            _goods[i].transform.localPosition = Define.GoodsPos[i];
        }
    }

    public void OnGoodsMovingFinished()
    {
        if (_goods[0].name == _goods[1].name && _goods[1].name == _goods[2].name)
        {
            foreach (var item in _goods)
            {
                Destroy(item);
            }
        }
    }
}

using UnityEngine;

public class MyGameManager : MonoBehaviour
{
    [SerializeField] private ShelfController[] _shelfList;

    #region Singleton
    private static MyGameManager _instance = null;

    public static MyGameManager Instance 
    {
        get { return _instance; }
    }

    private void Awake()
    {
        if(_instance == null)
        {
            _instance = this;
        }
        else
        {
            Destroy(this);
        }
    }
    #endregion

    void Start()
    {
        Physics.IgnoreLayerCollision(LayerMask.NameToLayer(Define.GoodsTag), LayerMask.NameToLayer(Define.GoodsTag), true);
    }
}

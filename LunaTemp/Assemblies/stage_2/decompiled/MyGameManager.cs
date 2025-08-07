using UnityEngine;

public class MyGameManager : MonoBehaviour
{
	[SerializeField]
	private ShelfController[] _shelfList;

	public GameObject PopupWordObject;

	public GameObject EndPanel;

	private static MyGameManager _instance;

	public static MyGameManager Instance => _instance;

	private void Awake()
	{
		if (_instance == null)
		{
			_instance = this;
		}
		else
		{
			Object.Destroy(this);
		}
	}

	private void Start()
	{
		Physics.IgnoreLayerCollision(LayerMask.NameToLayer(Define.GoodsTag), LayerMask.NameToLayer(Define.GoodsTag), true);
	}

	public void OnGoodsDestroy()
	{
		ShelfController[] shelfList = _shelfList;
		foreach (ShelfController shelf in shelfList)
		{
			if (shelf.GetComponentInChildren<GoodsController>() != null)
			{
				return;
			}
		}
		EndPanel.SetActive(true);
	}
}

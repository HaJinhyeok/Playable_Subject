using UnityEngine;

public class MouseInputController : MonoBehaviour
{
	public static bool s_isMoving;

	private GoodsController _currentGoods;

	private RaycastHit _hit;

	private Vector3 _mouseWorldPos;

	private void Update()
	{
		if (Input.GetMouseButtonDown(0) && !s_isMoving)
		{
			_mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			Physics.Raycast(_mouseWorldPos, Vector3.forward, out _hit, 15f, 1 << LayerMask.NameToLayer(Define.GoodsTag));
			if (_hit.collider != null)
			{
				Debug.Log("Raycasthit: " + _hit.collider.name);
				_currentGoods = _hit.collider.GetComponent<GoodsController>();
				Vector3 newPos = _mouseWorldPos;
				newPos.z = -3.5f;
				_currentGoods.transform.position = newPos;
			}
			s_isMoving = true;
		}
		else if (Input.GetMouseButton(0))
		{
			_mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			if (_currentGoods != null)
			{
				Vector3 newPos2 = _mouseWorldPos;
				newPos2.z = -3.5f;
				_currentGoods.transform.position = newPos2;
			}
		}
		else if (Input.GetMouseButtonUp(0) && _currentGoods != null)
		{
			_mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
			Physics.Raycast(_mouseWorldPos, Vector3.forward, out _hit, 15f, 1 << LayerMask.NameToLayer(Define.ShelfTag));
			if (_hit.collider != null)
			{
				_currentGoods.MoveToShelf(_hit);
				_currentGoods = null;
			}
		}
	}
}

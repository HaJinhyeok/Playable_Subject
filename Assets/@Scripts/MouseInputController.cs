using UnityEngine;
using UnityEngine.EventSystems;

public class MouseInputController : MonoBehaviour
{
    public static bool s_isMoving = false;

    GoodsController _currentGoods;
    RaycastHit _hit;
    Vector3 _mouseWorldPos;

    void Update()
    {
        if (Input.GetMouseButtonDown(0) && !s_isMoving)
        {
            _mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Physics.Raycast(_mouseWorldPos, Vector3.forward, out _hit, Define.RayDistance, 1 << LayerMask.NameToLayer(Define.GoodsTag));
            if (_hit.collider != null)
            {
                Debug.Log($"Raycasthit: {_hit.collider.name}");
                _currentGoods = _hit.collider.GetComponent<GoodsController>();
                Vector3 newPos = _mouseWorldPos;
                newPos.z = Define.GoodsDraggingOffset;
                _currentGoods.transform.position = newPos;
            }
            s_isMoving = true;
        }
        else if (Input.GetMouseButton(0))
        {
            _mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            if (_currentGoods != null)
            {
                Vector3 newPos = _mouseWorldPos;
                newPos.z = Define.GoodsDraggingOffset;
                _currentGoods.transform.position = newPos;
            }
        }
        else if (Input.GetMouseButtonUp(0) && _currentGoods != null)
        {
            _mouseWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Physics.Raycast(_mouseWorldPos, Vector3.forward, out _hit, Define.RayDistance, 1 << LayerMask.NameToLayer(Define.ShelfTag));
            //_currentGoods.MoveToPosition()
            if (_hit.collider != null)
            {
                //Debug.Log($"Raycasthit: {_hit.collider.name}");
                _currentGoods.MoveToShelf(_hit);
                _currentGoods = null;
            }
        }
    }
}

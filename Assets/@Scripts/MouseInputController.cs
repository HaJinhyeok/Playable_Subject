using UnityEngine;
using UnityEngine.EventSystems;

public class MouseInputController : MonoBehaviour, IDragHandler
{
    GameObject _currentGoods;
    RaycastHit _hit;

    void Start()
    {
        
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Physics.Raycast(Camera.main.transform.position, Vector3.forward, out _hit, Define.RayDistance, 1 << LayerMask.NameToLayer(Define.GoodsTag));
        }
        else if (Input.GetMouseButton(0))
        {

        }
        else if (Input.GetMouseButtonUp(0))
        {
        }
    }

    public void OnDrag(PointerEventData eventData)
    {
        throw new System.NotImplementedException();
    }
}

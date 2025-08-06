using UnityEditor.Experimental.GraphView;
using UnityEngine;

public class GoodsController : MonoBehaviour
{
    private bool _isMoving = false;
    private Vector3 _destination;
    private Vector3 _direction;

    void Update()
    {
        if (_isMoving)
        {
            transform.Translate(_direction * Define.GoodsSpeed * Time.deltaTime);
            // 목표에 닿으면 이동 중지
            if(Vector3.Distance(transform.position, _destination) <= 0.1f)
            {
                transform.position = _destination;
                _isMoving = false;
            }
        }
    }

    public void MoveToPosition(Vector3 dst)
    {
        _destination = dst;
        _direction = (_destination - transform.position).normalized;
        _isMoving = true;
    }
}

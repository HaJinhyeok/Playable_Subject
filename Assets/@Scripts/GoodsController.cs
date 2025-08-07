using System;
using System.Collections;
using UnityEngine;

public class GoodsController : MonoBehaviour
{
    public int CurrentIdx;
    public Vector3 CurrentLocalPosition;
    public ShelfController CurrentShelf;

    public event Action OnMoveFinished;

    public void MoveToShelf(RaycastHit hit)
    {
        ShelfController dst = hit.collider.GetComponent<ShelfController>();
        int idx = dst.GetPossibleGoodsPos(hit);
        CurrentLocalPosition = (idx < 0) ? CurrentLocalPosition : Define.GoodsPos[idx];
        if (idx >= 0)
        {
            CurrentShelf.SetSpace(CurrentIdx, false);
            transform.SetParent(dst.transform);
            CurrentShelf = dst;
            dst.GoodsObjects[idx] = gameObject;
            dst.SetSpace(idx, true);
            CurrentIdx = idx;
        }
        OnMoveFinished = null;
        OnMoveFinished += dst.OnGoodsMovingFinished;
        StartCoroutine(CoMoveToDst());
    }

    IEnumerator CoMoveToDst()
    {
        while (Vector3.Distance(transform.localPosition, CurrentLocalPosition) > 0.1f)
        {
            transform.localPosition = Vector3.Lerp(transform.localPosition, CurrentLocalPosition, Define.GoodsSpeed * Time.deltaTime);
            yield return null;
        }
        MouseInputController.s_isMoving = false;
        OnMoveFinished?.Invoke();
    }
}

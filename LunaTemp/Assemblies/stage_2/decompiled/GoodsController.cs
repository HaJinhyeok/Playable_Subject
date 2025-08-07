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
		CurrentLocalPosition = ((idx < 0) ? CurrentLocalPosition : Define.GoodsPos[idx]);
		if (idx >= 0)
		{
			CurrentShelf.SetSpace(CurrentIdx, false);
			base.transform.SetParent(dst.transform);
			CurrentShelf = dst;
			dst.GoodsObjects[idx] = base.gameObject;
			dst.SetSpace(idx, true);
			CurrentIdx = idx;
		}
		this.OnMoveFinished = null;
		OnMoveFinished += dst.OnGoodsMovingFinished;
		StartCoroutine(CoMoveToDst());
	}

	private IEnumerator CoMoveToDst()
	{
		while (Vector3.Distance(base.transform.localPosition, CurrentLocalPosition) > 0.1f)
		{
			base.transform.localPosition = Vector3.Lerp(base.transform.localPosition, CurrentLocalPosition, 5f * Time.deltaTime);
			yield return null;
		}
		MouseInputController.s_isMoving = false;
		this.OnMoveFinished?.Invoke();
	}
}

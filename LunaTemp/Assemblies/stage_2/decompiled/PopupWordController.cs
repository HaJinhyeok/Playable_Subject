using System.Collections;
using UnityEngine;

public class PopupWordController : MonoBehaviour
{
	private readonly Vector3 _startScale = Vector3.one * 2f;

	private readonly Vector3 _endScale = Vector3.one;

	private void OnEnable()
	{
		base.transform.localScale = _startScale;
		StartCoroutine(CoDecreasing());
	}

	private IEnumerator CoDecreasing()
	{
		while (Vector3.Distance(base.transform.localScale, _endScale) > 0.1f)
		{
			base.transform.localScale = Vector3.Lerp(base.transform.localScale, _endScale, Time.deltaTime * 5f);
			yield return null;
		}
		Object.Destroy(base.gameObject);
		MyGameManager.Instance.OnGoodsDestroy();
	}
}

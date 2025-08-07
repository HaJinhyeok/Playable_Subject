using System.Collections;
using UnityEngine;

public class PopupWordController : MonoBehaviour
{
    readonly Vector3 _startScale = Vector3.one * 2f;
    readonly Vector3 _endScale = Vector3.one;

    private void OnEnable()
    {
        transform.localScale = _startScale;
        StartCoroutine(CoDecreasing());
    }

    IEnumerator CoDecreasing()
    {
        while (Vector3.Distance(transform.localScale, _endScale) > 0.1f)
        {
            transform.localScale = Vector3.Lerp(transform.localScale, _endScale, Time.deltaTime * Define.GoodsSpeed);
            yield return null;
        }
        Destroy(gameObject);
        MyGameManager.Instance.OnGoodsDestroy();
    }
}

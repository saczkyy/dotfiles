using System.Collections;
using System.Collections.Generic;
using Unity.Mathematics;
using UnityEngine;
using UnityEngine.UIElements;

public class balin : MonoBehaviour
{
    
    public Material material;
    public Vector2 start1 = new Vector2(0,0);
    public float angle = 0;
    public float radius = 10;
    public float width = 1f;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        DrawLine2points(new Vector2(1,1), new Vector2(6,1), 1f, Color.red);
        DrawLineStartLength(start1, angle, radius, width, Color.green);
    }
    void DrawLine2points(Vector2 start, Vector2 end, float width, Color color)
    {
        GameObject line = new GameObject("Line");

        LineRenderer lineRenderer = line.AddComponent<LineRenderer>();

        if (material != null) {
            lineRenderer.material = material;
        } else {
            Debug.Log("Nie ma materialu");
        }

        lineRenderer.startColor = color;
        lineRenderer.endColor = color;

        lineRenderer.startWidth = width;
        lineRenderer.endWidth = width;

        lineRenderer.positionCount = 2;
        lineRenderer.SetPosition(0, start);
        lineRenderer.SetPosition(1, end);
    }
    void DrawLineStartLength(Vector2 start, float angle, float radius, float width, Color color){
        GameObject line = new GameObject("Line");

        LineRenderer lineRenderer = line.AddComponent<LineRenderer>();

        if (material != null) {
            lineRenderer.material = material;
        } else {
            Debug.Log("Nie ma materialu");
        }

        lineRenderer.startColor = color;
        lineRenderer.endColor = color;

        lineRenderer.startWidth = width;
        lineRenderer.endWidth = width;


        float radians = (angle * math.PI) / 180;
        float x = math.cos(radians) * radius;
        float y = math.sin(radians) * radius;

        Vector2 end = new Vector2(x, y);

        lineRenderer.positionCount = 2;
        lineRenderer.SetPosition(0, start);
        lineRenderer.SetPosition(1, end);

    }

}


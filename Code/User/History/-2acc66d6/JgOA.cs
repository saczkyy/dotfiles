using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class balin : MonoBehaviour
{
    Material material = Resources.Load<Material>("standard");

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        DrawLine(new Vector2(1,1), new Vector2(6,1), 0.1f, Color.red);
    }
    void DrawLine(Vector2 start, Vector2 end, float width, Color color)
    {
        // Create a new GameObject to hold the line
        GameObject line = new GameObject("Line");

        // Attach a LineRenderer component to the new GameObject
        LineRenderer lineRenderer = line.AddComponent<LineRenderer>();

        // Set the line's material (you can create a material in Unity and assign it here)
        if (material != null) {
            lineRenderer.material = material;
            Debug.Log("jest");
        } else {
            Debug.Log("Nie ma materialu");
        }

        // Set the color of the line
        lineRenderer.startColor = color;
        lineRenderer.endColor = color;

        // Set the width of the line
        lineRenderer.startWidth = width;
        lineRenderer.endWidth = width;

        // Set the positions of the line's start and end points
        lineRenderer.positionCount = 2;
        lineRenderer.SetPosition(0, start);
        lineRenderer.SetPosition(1, end);
    }

}


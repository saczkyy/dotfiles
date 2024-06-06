using System.Collections;
using System.Collections.Generic;
using Unity.Mathematics;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UIElements;

public class balin : MonoBehaviour
{
    
    static public Material material;
    
    // Start is called before the first frame update
    void Start()
    {
        // DrawLineStartLength(start1, angle, radius, width, Color.green);
    }

    // Update is called once per frame
    void Update()
    {
        // DrawLine2points(new Vector2(1,1), new Vector2(6,1), 1f, Color.red);
        
    }
    
    
    class Line{
        Vector2 start;
        Vector2 end;
        float angle;
        float radius;
        float width;
        Color color;
        GameObject line;

        void DrawLine2points(Vector2 start, Vector2 end, float width, Color color){
            this.start = start;
            this.end = end;
            this.width = width;
            this.color = color;

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
            this.start = start;
            this.angle = angle;
            this.radius = radius;
            this.width = width;
            this.color = color;

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
            this.end = end;

            lineRenderer.positionCount = 2;
            lineRenderer.SetPosition(0, start);
            lineRenderer.SetPosition(1, end);

            this.line = line;
        }

        void update(){
            this.start = start;
            this.angle = angle;
            this.radius = radius;
            this.width = width;
            this.color = color;
            
            LineRenderer lineRenderer = this.line.GetComponent<LineRenderer>();

            lineRenderer.startWidth = width;
            lineRenderer.endWidth = width;


            float radians = (angle * math.PI) / 180;
            float x = math.cos(radians) * radius;
            float y = math.sin(radians) * radius;

            Vector2 end = new Vector2(x, y);
            this.end = end;

            lineRenderer.positionCount = 2;
            lineRenderer.SetPosition(0, start);
            lineRenderer.SetPosition(1, end);
        }
    }

}


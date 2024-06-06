using System.Collections;
using System.Collections.Generic;
using Unity.Mathematics;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UIElements;

public class balin : MonoBehaviour
{
    
    static public Material material;
    public Vector2 start;
    public Vector2 end;
    public float angle;
    public float length;
    public float width_line;

    public Vector2 middle;
    public float radius;
    public float width_circle;


    Line line;
    Circle circle;

    
    // Start is called before the first frame update
    void Start()
    {
        line = new Line();
        line.DrawLineStartLength(start, angle, length, width_line, Color.green);

        circle = new Circle();
        circle.DrawCircle(middle, radius, width_circle, Color.blue);

    }

    // Update is called once per frame
    void Update()
    {
        // DrawLine2points(new Vector2(1,1), new Vector2(6,1), 1f, Color.red);
        line.update(start, angle, length, width_line);

    }
    
    
    class Line{
        Vector2 start;
        Vector2 end;
        float angle;
        float radius;
        float width;
        Color color;
        GameObject line;

        public void DrawLine2points(Vector2 start, Vector2 end, float width, Color color){
            this.start = start;
            this.end = end;
            this.width = width;
            this.color = color;

            GameObject line = new GameObject();

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
        public void DrawLineStartLength(Vector2 start, float angle, float radius, float width, Color color){
            this.start = start;
            this.angle = angle;
            this.radius = radius;
            this.width = width;
            this.color = color;

            GameObject line = new GameObject();

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

        public void update(Vector2 start, float angle, float radius, float width){
            this.start = start;
            this.angle = angle;
            this.radius = radius;
            this.width = width;
            
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

    class Circle{
        Vector2 middle;
        float radius;
        float width;
        Color color;
        GameObject circle;

        public void DrawCircle(Vector2 mid, float radius, float width, Color color){
            this.middle = mid;
            this.radius = radius;
            this.width = width;
            this.color = color;

            GameObject circle = new GameObject();
            LineRenderer lr = circle.AddComponent<LineRenderer>();

            lr.startColor = color;
            lr.endColor = color;
            lr.startWidth = width;
            lr.endWidth = width;

            lr.positionCount = 360; 

            for (int angle = 0; angle<360; angle++){
                float radians = (angle * math.PI) / 180;
                float x = math.cos(radians) * radius;
                float y = math.sin(radians) * radius;
                Vector2 point = new Vector2(x, y);

                lr.SetPosition(angle, point);
            }

            this.circle = circle;
        }
    
        public void Update(Vector2 mid, float radius, float width){
            this.middle = mid;
            this.radius = radius;
            this.width = width;

            LineRenderer lr = circle.AddComponent<LineRenderer>();

            lr.startWidth = width;
            lr.endWidth = width;

            lr.positionCount = 360; 

            for (int angle = 0; angle<360; angle++){
                float radians = (angle * math.PI) / 180;
                float x = math.cos(radians) * radius;
                float y = math.sin(radians) * radius;
                Vector2 point = new Vector2(x, y);

                lr.SetPosition(angle, point);
            }
        }
    }
}


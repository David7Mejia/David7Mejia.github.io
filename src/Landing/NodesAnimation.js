import React, { useRef, useEffect } from "react";

const NodesAnimation = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  // Constants
  const SENSITIVITY = 100;
  const SIBLINGS_LIMIT = 10;
  const DENSITY = 40;
  const ANCHOR_LENGTH = 100;
  const EDGE_FADE_SENSITIVITY = 30;
  const MOUSE_RADIUS = 500;
  const circ = 2 * Math.PI;

  // Function to create a node
  const createNode = (x, y, ctx) => {
    return {
      anchorX: x,
      anchorY: y,
      x: Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH),
      y: Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH),
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
      energy: Math.random() * 100,
      radius: Math.random(),
      siblings: [],
      brightness: 0,
      moveNode() {
        this.energy -= 2;
        if (this.energy < 1) {
          this.energy = Math.random() * 100;
          if (this.x - this.anchorX < -ANCHOR_LENGTH) {
            this.vx = Math.random() * 2;
          } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
            this.vx = Math.random() * -2;
          } else {
            this.vx = Math.random() * 4 - 2;
          }
          if (this.y - this.anchorY < -ANCHOR_LENGTH) {
            this.vy = Math.random() * 2;
          } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
            this.vy = Math.random() * -2;
          } else {
            this.vy = Math.random() * 4 - 2;
          }
        }
        this.x += (this.vx * this.energy) / 100;
        this.y += (this.vy * this.energy) / 100;
      },
      drawNode() {
        const edgeDistance = Math.min(Math.min(this.x, ctx.canvas.width - this.x), Math.min(this.y, ctx.canvas.height - this.y));
        const maxEdgeDistance = Math.min(edgeDistance, EDGE_FADE_SENSITIVITY);
        const edgeBrightness = maxEdgeDistance / EDGE_FADE_SENSITIVITY;
        this.brightness = Math.min(this.brightness, edgeBrightness);

        const color = `rgba(150, 232, 254, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2 * this.radius + (2 * this.siblings.length) / SIBLINGS_LIMIT, 0, circ);
        ctx.fillStyle = color;
        ctx.fill();
      },
      drawConnections() {
        for (let i = 0; i < this.siblings.length; i++) {
          const sibling = this.siblings[i];
          const color = `rgba(150, 232, 254, ${this.brightness})`;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(sibling.x, sibling.y);
          ctx.lineWidth = 1 - calcDistance(this, sibling) / SENSITIVITY;
          ctx.strokeStyle = color;
          ctx.stroke();
        }
      },
    };
  };

  // Function to calculate distance between two nodes
  const calcDistance = (node1, node2) => {
    return Math.sqrt((node1.x - node2.x) ** 2 + (node1.y - node2.y) ** 2);
  };

  // Function to find siblings
  const findSiblings = () => {
    let nodes = nodesRef.current;
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].siblings = [];
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const distance = calcDistance(nodes[i], nodes[j]);
          if (distance < SENSITIVITY && nodes[i].siblings.length < SIBLINGS_LIMIT) {
            nodes[i].siblings.push(nodes[j]);
          }
        }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to match the container's dimensions
    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = container.clientWidth * ratio;
      canvas.height = container.clientHeight * ratio;
      canvas.style.width = `${container.clientWidth}px`;
      canvas.style.height = `${container.clientHeight}px`;
      ctx.scale(ratio, ratio);
    };

    // ResizeObserver to adjust the canvas when the container's size changes
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeObserver.observe(container);

    // Event handler for mouse movement
    const mousemoveHandler = e => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    // Function to initialize nodes
    const initNodes = () => {
      nodesRef.current = []; // Clear the current nodes
      for (let i = DENSITY; i < canvas.width; i += DENSITY) {
        for (let j = DENSITY; j < canvas.height; j += DENSITY) {
          const node = createNode(i, j, ctx);
          nodesRef.current.push(node);
        }
      }
    };

    // Function to redraw the scene
    const redrawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      findSiblings();
      nodesRef.current.forEach(node => {
        const distanceToMouse = calcDistance({ x: mouse.current.x, y: mouse.current.y }, node);
        node.brightness = distanceToMouse < MOUSE_RADIUS ? 1 - distanceToMouse / MOUSE_RADIUS : 0;
        node.drawNode(ctx, EDGE_FADE_SENSITIVITY, SIBLINGS_LIMIT, circ);
        if (node.brightness) {
          node.drawConnections(ctx, SENSITIVITY);
        }
        node.moveNode(ANCHOR_LENGTH);
      });
      requestAnimationFrame(redrawScene);
    };

    canvas.addEventListener("mousemove", mousemoveHandler);
    resizeCanvas();
    initNodes();
    requestAnimationFrame(redrawScene);

    // Clean up
    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);

  return (
    <div className="" ref={containerRef} style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }}></canvas>
    </div>
  );
};

export default NodesAnimation;

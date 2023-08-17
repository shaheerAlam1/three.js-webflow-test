 import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.module.js';
    // Initialize Three.js scene
    const container = document.getElementById('threejs-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    container.appendChild(renderer.domElement);

    // Add a random box to the scene
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    // Set initial camera position
    camera.position.z = 5;

    // Handle scroll events
    window.addEventListener('scroll', () => {
        // Calculate scroll progress
        const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        
        // Adjust camera's zoom (move closer to the box) as user scrolls
        camera.position.z = 5 - scrollProgress * 3; // Adjust the factor to control the zoom speed

        // Update the scene
        renderer.render(scene, camera);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        renderer.render(scene, camera);
    });

    // Start rendering loop
    const animate = () => {
        // Update camera and scene properties as needed
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

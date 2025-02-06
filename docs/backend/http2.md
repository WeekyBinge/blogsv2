---
title: HTTP/2
description: What is HTTP/2.
slug: http2
authors:
  - name: Ritesh Sonawane
    title: Associate SRE @CloudRaft ⛵
    url: https://riteshsonawane.com
    image_url: img/round-profile.png
tags: [backend, networking]
image: img/round-profile.png
hide_table_of_contents: true
---

### Why Was HTTP/2 Needed?

HTTP/1.1 had limitations:

1. **One Request at a Time Per Connection:** If your browser needs to load multiple resources (like images, CSS, and JavaScript), it must open multiple connections, which is slow.
2. **Head-of-Line Blocking:** A slow response would block other requests in the same connection.
3. **High Overhead:** Each request and response carries extra metadata, making communication heavier and slower.

### Key Features of HTTP/2

1. **Multiplexing:**
    
    - Multiple requests and responses can be sent simultaneously over a single connection.
    - No more waiting for one request to finish before starting another.
2. **Header Compression:**
    
    - HTTP headers are compressed, reducing their size and speeding up communication.
3. **Binary Protocol:**
    
    - HTTP/2 uses binary format (0s and 1s) instead of the textual format in HTTP/1.1. Binary is easier for computers to process, making it faster.
4. **Server Push:**
    
    - The server can "push" resources to the client before the client even asks. For example, if you load a webpage, the server might send its CSS and JavaScript files immediately, knowing you'll need them.
5. **Persistent Connection:**
    
    - A single connection stays open for the entire session, avoiding the overhead of opening and closing multiple connections.

#### HTTP/1.1:

Imagine you're at a restaurant where you order dishes one at a time. The waiter brings one dish, waits for you to finish, and then goes back to the kitchen for the next dish. This is slow and inefficient.

### HTTP/2:

Here, the waiter brings all the dishes together, or even anticipates what you'll order and brings it in advance. This saves time and speeds up your dining experience.


> Ensure ur server supports HTTP-2 

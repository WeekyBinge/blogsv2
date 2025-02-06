---
title: HTTP/3
description: What is HTTP/3.
slug: http3
authors:
  - name: Ritesh Sonawane
    title: Associate SRE @CloudRaft ⛵
    url: https://riteshsonawane.com
    image_url: img/round-profile.png
tags: [backend, networking]
image: img/round-profile.png
hide_table_of_contents: true
---


HTTP/3 is built on a newer transport protocol called **QUIC** (Quick UDP Internet Connections). It is built on top of UDP 

### Why Was HTTP/3 Needed?

HTTP/2 brought many improvements, but it still relied on TCP, which has some inherent problems:

1. **Head-of-Line Blocking at the Transport Level:**
    - In HTTP/2, if one packet is lost, TCP forces the client to wait for the lost packet before continuing. This slows everything down.
2. **Connection Setup Time:**
    - TCP connections require a "handshake" before data is sent, which adds delay.
3. **Inefficiency with Mobile Networks:**
    - When switching networks (e.g., from Wi-Fi to mobile), TCP connections break and have to be re-established.
#### Key Features of HTTP/3:

1. **No Head-of-Line Blocking:**
    
    - In QUIC, if one packet is lost, only that packet is resent. Other data can keep flowing, improving speed and reliability.
2. **Faster Connections:**
    
    - QUIC combines the handshake for both encryption (TLS) and transport into a single step. This reduces connection setup time.
3. **Seamless Connection Migration:**
    
    - QUIC connections survive network changes (e.g., switching from Wi-Fi to mobile data), unlike TCP.
4. **Built-in Encryption:**
    
    - QUIC has encryption (TLS 1.3) built into the protocol, making HTTP/3 more secure by default.

### How HTTP/3 Works

#### HTTP/1.1 and HTTP/2:

- Both use **TCP**, which guarantees that packets arrive in order. However, this can lead to delays because of packet retransmission.

#### HTTP/3:

- Uses **UDP** with QUIC.
- QUIC manages retransmissions at the packet level but doesn't force all streams to wait if one packet is delayed. This avoids head-of-line blocking and makes data transfer faster.

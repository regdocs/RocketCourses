# What are Sockets?
### 1. What is an IP Address and a Port?

An Internet Protocol address (IP address) is a numerical label such as 192.0.2.1 that is connected to a computer network that uses the Internet Protocol for communication. **An IP address serves two principal functions: it identifies the host, or more specifically its network interface, and it provides the location of the host in the network, and thus the capability of establishing a path to that host.** The header of each IP packet contains the IP address of the sending host and that of the destination host.

Internet Protocol version 4 (IPv4) defines an IP address as a 32-bit number. However, because of the growth of the Internet and the depletion of available IPv4 addresses, a new version of IP (IPv6), using 128 bits for the IP address, was standardized in 1998. IPv6 deployment has been ongoing since the mid-2000s.

IP addresses are written and displayed in human-readable notations, such as `192.0.2.1` in IPv4, and `2001:db8:0:1234:0:567:8:1` in IPv6.

![](https://cdn.discordapp.com/attachments/1091719595552931881/1092000676466413648/IP__PORT.jpg)

Some notable commonly used unofficial and reserved ports:

Port # | Usage
-------|--------
20 | File Transfer Protocol (FTP)
22 | Secure Shell (SSH)
23 | Telnet
25 | Historically, Simple Mail Transfer Protocol (SMTP)
53 | Domain Name System
80 | HTTP Server (without TLS encryption)
443 | HTTPS Server (with TLS encryption)
587 | Modern encrypted SMTP 
3000 | create-react-app dev deployment
3389 | Remote Desktop Protocol (RDP)
9001 | Tor Network

The IP address space is managed globally by the Internet Assigned Numbers Authority (IANA), and by five regional Internet registries (RIRs) responsible in their designated territories for assignment to local Internet registries, such as Internet service providers (ISPs), and other end users. **Some IPv4 addresses are reserved for private networks and are not globally unique viz. those with format `192.168.***.***` (private NAT address) or `127.0.0.1` (localhost).**

Network administrators assign an IP address to each device connected to a network. Such assignments may be on a static (fixed or permanent) or dynamic basis (changing after a restablished route), depending on network practices and software features.

Reference: [Wikipedia - IP Address](https://en.wikipedia.org/wiki/IP_address)

Read more: [Wikipedia - List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)

### 2. Combination of Transport Protocol (ususally either TCP or UDP), IP Address and a Port forms a Network Socket

A network socket is a software structure within a network node of a computer network that serves as an endpoint for sending and receiving data across the network. The structure and properties of a socket are defined by an application programming interface (API) for the networking architecture. Sockets are created only during the lifetime of a process of an application running in the node.

Because of the standardization of the TCP/IP protocols in the development of the Internet, the term network socket is most commonly used in the context of the Internet protocol suite, and is therefore often also referred to as Internet socket. In this context, a socket is externally identified to other hosts by its socket address, which is the **triad of transport protocol, IP address, and port number**.

Reference: [Wikipedia - Network socket](https://en.wikipedia.org/wiki/Network_socket)

# Components of a URL
1. Top Level Domain Name
2. Secondary Level Domain Name
3. Sub-domain Name
4. Protocol Identifier
	- What is TCP/IP & HTTP/HTTPS?

# Domain to Web Socket resolution: The Domain Name System
1. DNS Resolver / Recursive Resolver
2. DNS Hierarchy:
	- Root Server (13 independent organisations: servers labelled A to M; has TLD server mapping)
	- TLD Server (about 1000 across the globe; has SLD server mapping)
	- SLD Server (has Authoritative name server mapping; ANS entry can be controlled by domain owner)
	- Authoritative Name Server (has sub-domain A, AAAA, CNAME, MX etc. records; can be controlled by domain owner)

**DNS Resolver server can be changed via Chrome & Firefox security settings.** 

![](https://res.cloudinary.com/practicaldev/image/fetch/s--5KgHsEBp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/DpK9H6o.png)

![](https://cdn.discordapp.com/attachments/1091719595552931881/1091951820961763479/DNS.resolv.jpg)

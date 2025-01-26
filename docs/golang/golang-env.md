---
title: Golang Environment variables
description: What are golang environment variables .
slug: golang-env
authors:
  - name: Ritesh Sonawane
    title: Associate SRE @CloudRaft ⛵
    url: https://riteshsonawane.com
    image_url: img/round-profile.png
tags: [programming, golang]
image: img/round-profile.png
hide_table_of_contents: true
---

# Golang Environment variables

### **1. Core Build and Runtime Environment Variables**

1. **GOROOT**
   - **Purpose:** Specifies the root directory where Go is installed.
   - **Default:** Set automatically by Go; generally not set manually unless using a custom Go installation.
   - **Example:** `/usr/local/go`

2. **GOPATH**
   - **Purpose:** The workspace directory for Go, which contains `src`, `pkg`, and `bin` directories.
   - **Default:** `$HOME/go` if not set manually.

3. **GOOS**
   - **Purpose:** Sets the target operating system for builds.
   - **Values:** `linux`, `darwin`, `windows`, `freebsd`, etc.
   - **Usage:** Can be used to cross-compile for different platforms.

4. **GOARCH**
   - **Purpose:** Sets the target CPU architecture for builds.
   - **Values:** `amd64`, `386`, `arm`, `arm64`, `ppc64`, etc.
   - **Usage:** Used for cross-compiling for different architectures.

5. **GOMOD**
   - **Purpose:** Shows the path to the `go.mod` file if the project uses modules.
   - **Example:** `/path/to/your/project/go.mod`

---

### **2. Module-Related Variables**

6. **GOPROXY**
   - **Purpose:** Sets the URL for the Go module proxy, which fetches dependencies.
   - **Default:** `https://proxy.golang.org`
   - **Example:** `direct` (to fetch directly from source repositories).

7. **GOSUMDB**
   - **Purpose:** Specifies the checksum database for verifying module authenticity.
   - **Default:** `sum.golang.org`
   - **Usage:** Set to `off` to disable checksum validation.

8. **GOMODCACHE**
   - **Purpose:** Sets the location for the Go module cache, where downloaded modules are stored.
   - **Default:** `$GOPATH/pkg/mod`

9. **GOINSECURE**
   - **Purpose:** Specifies modules or repositories to skip the checksum validation.
   - **Example:** `example.com/insecure/module`

10. **GOPRIVATE**
    - **Purpose:** Lists private modules or repositories, skipping proxy and checksum checks for these modules.
    - **Example:** `mycompany.com/private/...`

11. **GO111MODULE**
    - **Purpose:** Controls the use of modules.
    - **Values:** `auto` (default, enabling modules based on environment), `on` (always enable), `off` (disable).

---

### **3. Debugging and Performance Variables**

12. **GOCACHE**
    - **Purpose:** Directory for storing cached Go build data.
    - **Default:** `$HOME/.cache/go-build`

13. **GODEBUG**
    - **Purpose:** Enables various runtime debugging options.
    - **Example:** `gctrace=1` (logs garbage collection information), `schedtrace=1000` (logs scheduling information every 1000 ms)

14. **GOTRACEBACK**
    - **Purpose:** Controls the level of detail in stack traces when a program crashes.
    - **Values:** `none`, `single`, `all`, `system`
    - **Example:** `all` for complete stack traces.

15. **GOMAXPROCS**
    - **Purpose:** Limits the maximum number of CPUs that can execute Go code simultaneously.
    - **Default:** Equal to the number of CPUs available on the system.

---

### **4. Build Configuration Variables**

16. **CGO_ENABLED**
    - **Purpose:** Enables or disables `cgo`, allowing Go to call C code.
    - **Values:** `0` (disabled), `1` (enabled)
    - **Default:** `1` on most platforms, `0` when cross-compiling.

17. **GOFLAGS**
    - **Purpose:** Sets global flags for all `go` commands.
    - **Example:** `-mod=readonly` to prevent `go.mod` from being modified.

18. **GOTMPDIR**
    - **Purpose:** Directory for temporary files used during builds.
    - **Default:** System temp directory, like `/tmp` on Unix.

19. **GOBIN**
    - **Purpose:** Directory where `go install` saves executable binaries.
    - **Default:** `$GOPATH/bin`

20. **GOEXPERIMENT**
    - **Purpose:** Enables experimental features in Go; generally used for internal testing.
    - **Example:** `loopvar`

---

### **5. Testing and CI/CD Related Variables**

21. **GOTEST**
    - **Purpose:** Used to pass additional arguments to `go test`.
    - **Example:** `-v` for verbose test output.

22. **GOTESTFLAGS**
    - **Purpose:** Specifies flags for `go test`.
    - **Example:** `-timeout=1m` to set a timeout for tests.

23. **GOEXE**
    - **Purpose:** Sets the file extension for executables (useful when cross-compiling).
    - **Default:** Empty on Unix, `.exe` on Windows.

24. **GOTRACEBACK**
    - **Purpose:** Controls how much detail is included in a stack trace when the program crashes.
    - **Example:** `none`, `single`, `all`, `system`

---

### **6. Compiler and Linker Control Variables**

25. **GO_LDFLAGS**
    - **Purpose:** Flags passed to the linker, used to control the linking process.
    - **Example:** `-s -w` to reduce binary size by omitting symbol tables.

26. **GO_GCFLAGS**
    - **Purpose:** Flags for the Go compiler, particularly useful for debugging and controlling optimizations.
    - **Example:** `-l` to disable optimizations for better debugging.

27. **GO_LINKTOOL**
    - **Purpose:** Specifies a custom linker to use for Go builds.
    - **Default:** Uses the default Go linker unless overridden.

---

### **7. Miscellaneous Variables**

28. **GOVERSION**
    - **Purpose:** Displays the currently installed version of Go.
    - **Example:** `go1.20`

29. **GOOS**
    - **Purpose:** Sets the operating system target for cross-compiling (repeat).


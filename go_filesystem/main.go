package main

import (
	"bufio"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/grafov/m3u8"
)

var i int = 0

func main() {
	const filesDir = "files"
	const movie = "files/segment.m3u8"
	const port = 10000

	handleRequests(port, filesDir, movie)
}

func handleRequests(port int, filesDir string, movie string) {
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		modifym3u8()
		res.Header().Set("Access-Control-Allow-Origin", "*")
		h := http.FileServer(http.Dir(filesDir))
		h.ServeHTTP(res, req)

	})

	fmt.Printf("Starting server on %v\n", port)
	log.Printf("Serving %s on HTTP port: %v\n", filesDir, port)

	// serve and log errors
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), nil))
}

func modifym3u8() {
	f, err := os.Open("./files/movie_segment.m3u8")
	if err != nil {
		panic(err)
	}
	p, listType, err := m3u8.DecodeFrom(bufio.NewReader(f), true)
	mediapl := p.(*m3u8.MediaPlaylist)
	fmt.Println(listType)
	fmt.Println(mediapl.String())

	if i == 0 {
		p, err = m3u8.NewMediaPlaylist(3, 10)
		mediapl = p.(*m3u8.MediaPlaylist)
		mediapl.Append(fmt.Sprintf("segment%d.ts", i+0), 10.0, "")
		mediapl.Append(fmt.Sprintf("segment%d.ts", i+1), 10.0, "")
		mediapl.Append(fmt.Sprintf("segment%d.ts", i+2), 10.0, "")

	} else if i <= 61 {
		mediapl.Append(fmt.Sprintf("segment%d.ts", i+2), 10.0, "")
		mediapl.Remove()
	} else if i <= 63 {
		mediapl.Remove()
	} else {
		p, err = m3u8.NewMediaPlaylist(3, 10)
		mediapl = p.(*m3u8.MediaPlaylist)
		mediapl.Append(fmt.Sprintf("segment%d.ts", 0), 10.0, "")
		mediapl.Append(fmt.Sprintf("segment%d.ts", 1), 10.0, "")
		mediapl.Append(fmt.Sprintf("segment%d.ts", 2), 10.0, "")
		i = 0
	}

	mediapl.Close()
	i++
	fmt.Println(i)
	os.WriteFile("./files/movie_segment.m3u8", mediapl.Encode().Bytes(), 0644)

}

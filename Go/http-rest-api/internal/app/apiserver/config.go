package apiserver

type Config struct {
	// The address on which to serve the apiserver
	BindAddr string `toml:"bind_addr"`
	LogLevel string `toml:"log_level"`
}

func NewConfig() *Config {
	return &Config{
		BindAddr: "127.0.0.1:8080",
		LogLevel: "debug",
	}
}

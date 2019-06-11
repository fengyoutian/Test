package com.holy.dubbo.demo.provider;


import com.holy.dubbo.demo.api.DemoService;

public class DemoServiceImpl implements DemoService {
	@Override
	public String sayHello(String name) {
		return "Hello " + name;
	}
}

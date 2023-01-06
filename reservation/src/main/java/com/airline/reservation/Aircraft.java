package com.airline.reservation;


class Aircraft {
	String modelname;
	String type;
	int pcapacity;
	int fuelcapacity;

	public void setdetails(String x, String y, int pct, int fct) {
		this.modelname = x;
		this.type = y;
		this.pcapacity = pct;
		this.fuelcapacity = fct;
	}

	public void getdetails() {
		System.out.println("Aircraft Model :" + modelname);
		System.out.println("Aircraft Type :" + type);
		System.out.println("Passenger Capacity :" + pcapacity);
		System.out.println("Fuel Capacity :" + fuelcapacity + " Litres");
		System.out.println("");
	}

}

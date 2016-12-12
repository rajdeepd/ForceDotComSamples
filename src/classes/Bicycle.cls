public with sharing class Bicycle {
    private Integer cadence;
    private Integer gear;
    private Integer speed;

    public Bicycle(Integer startCadence, 
    	Integer startSpeed,
    	Integer startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    }

    public Integer getCadence() {
        return cadence;
    }

    public void setCadence(Integer newValue) {
        cadence = newValue;
    }

    public Integer getGear() {
        return gear;
    }

    public void setGear(Integer newValue) {
        gear = newValue;
    }

    public Integer getSpeed() {
        return speed;
    }

    public void applyBrake(Integer decrement) {
        speed -= decrement;
    }

    public void speedUp(Integer increment) {
        speed += increment;
    }
}
# 7.4 Parking Lot

# Design a parking lot using object-oriented principles.

# Questions
    # one or multiple levels (lot versus garage)
    # payment & staff area
    # types of vehicles it can park and where
        # different spots
        # how many spots each vehicle takes up
    # 

# public enum VehicleSize{Motorcycle, Compact, Large}

# Classes:
    # Vehicle
        # parking spots arraylist
        # license plate
        # spots needed
        # vehicle size

        # get spots needed
        # get vehicle size
        # park vehicle in this spot (parking spot)
        # remove car from spot
        # notify spot that it's gone
        # check if spot is big enough for vehicle (spot)

        # Bus
            # spots needed
            # vehicle size

            # checks if spot is large, not number of spots (spot)
        # Car
            # spots needed
            # vehicle size
            
            # checks if spot is compact or large, not number of spots (spot)

        # Motorcycle
            # spots needed
            # vehicle size
            
            # checks if spot is motorcycle, compact or large (spot)
                # not number of spots
    # Parking Lot
        # levels
        # number of levels

        # parking lot()
        # park vehicle in spot(s)
            # return false if failed
    # Level
        # floor
        # spots
        # available spots
        # spots per row

        # level (floor, number of spots)
        # available spots
        # park vehicle (vehicle)
        # park starting at spot (number, vehicle)
            # continue until vehicle.spotsNeeded
        # find available spots (vehicle)
        # spot freed

    # Parking Spot
        # vehicle
        # spot size
        # row
        # spot number
        # level

        # parking spot (level, r, n, vehicle size)
        # is available
        # get row
        # get spot number
        # park vehicle in spot (vehicle)
        # check if spot is big enough and available (vehicle)
        # remove vehicle from spot
        # notify level new spot is available